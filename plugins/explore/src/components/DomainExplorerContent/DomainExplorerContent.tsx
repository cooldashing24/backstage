/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DomainEntity } from '@backstage/catalog-model';
import {
  Content,
  ContentHeader,
  EmptyState,
  Progress,
  SupportButton,
  useApi,
} from '@backstage/core';
import { catalogApiRef } from '@backstage/plugin-catalog-react';
import { Button } from '@material-ui/core';
import React from 'react';
import { useAsync } from 'react-use';
import { DomainCardGrid } from '../DomainCard';

export const DomainExplorerContent = () => {
  const catalogApi = useApi(catalogApiRef);
  const { value: entities, loading } = useAsync(async () => {
    const response = await catalogApi.getEntities({
      filter: { kind: 'domain' },
    });

    return response.items as DomainEntity[];
  }, [catalogApi]);

  return (
    <Content noPadding>
      <ContentHeader title="Domains">
        <SupportButton>Discover the domains in your ecosystem.</SupportButton>
      </ContentHeader>

      {loading && <Progress />}
      {!loading && (!entities || entities.length === 0) && (
        <EmptyState
          missing="info"
          title="No domains to display"
          description={`You haven't added any domains yet.`}
          action={
            <Button
              variant="contained"
              color="primary"
              href="https://backstage.io/docs/features/software-catalog/descriptor-format#kind-domain"
            >
              Read more
            </Button>
          }
        />
      )}
      {!loading && entities && <DomainCardGrid entities={entities} />}
    </Content>
  );
};