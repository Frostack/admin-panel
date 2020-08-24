import React from 'react';
import { connect } from 'react-redux';

import useResource from '../../../../hooks/useResource';
import { deleteResource, showAlert, editResource } from '../../../../actions';
import {
  ErrorText,
  ResourceDetailWrapper,
  ResourceDetailUserCard,
  ResourceDetailRowItem,
  ResourceDetailGrayText,
  ColorName,
} from '../../../UI';
import Loading from '../../../UI/Loading';

function ResourceDetail({ resourceID }) {
  const { resource, isError, isLoading } = useResource(resourceID);

  if (isError) return <ErrorText className="text-center mt-5">Failed to Load!</ErrorText>;
  if (isLoading) return <Loading />;

  const { id, name, year, color, pantone_value } = resource.data;

  return (
    <ResourceDetailWrapper>
      <ResourceDetailUserCard color={color}>
        <ResourceDetailRowItem>
          <ColorName color={color} className="mx-auto mb-4 p-5">
            {name}
          </ColorName>
        </ResourceDetailRowItem>
        <ResourceDetailRowItem>
          <ResourceDetailGrayText>year</ResourceDetailGrayText>
          <div>{year}</div>
        </ResourceDetailRowItem>
        <ResourceDetailRowItem>
          <ResourceDetailGrayText>ID</ResourceDetailGrayText>
          <div>{id}</div>
        </ResourceDetailRowItem>
        <ResourceDetailRowItem>
          <ResourceDetailGrayText>Color</ResourceDetailGrayText>
          <div>{color}</div>
        </ResourceDetailRowItem>
        <ResourceDetailRowItem>
          <ResourceDetailGrayText>Pantone</ResourceDetailGrayText>
          <div>{pantone_value}</div>
        </ResourceDetailRowItem>
      </ResourceDetailUserCard>
    </ResourceDetailWrapper>
  );
}

const mapStateToProps = state => {
  return {
    resourceID: state.resource.detail.id,
  };
};

const mapDispatchToProps = {
  deleteResource,
  showAlert,
  editResource,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetail);
