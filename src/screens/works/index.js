import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import styled from "styled-components";

import { Query } from 'react-apollo';
import gql from "graphql-tag";

interface IProps {
  data?: any;
}

const Spinner = styled.View``;

const WorksView = styled.View`
`;

const GET_WORKS_QUERY = gql`
	query Works {
		works {
			id
			url
			name
			view
			likes {
				id
			}
			comments {
				id
			}
			author {
				name
				thumbUrl
				inkname
			}
		}
	}
`;

const HOSTING = "https://s3.ap-south-1.amazonaws.com/inkwell-bucket/";

const Works = ({ data }: IProps) => {
  return <Query query={GET_WORKS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Spinner />
      }
      if (error || !data || !data.works) {
        //message.error('Server is not available. Try again later');
        return <Spinner />;
      }
      const { works } = data;
      if (!works || !works.length) {
        return <Text>There is no works</Text>;
      }
      console.log(works);
      return (
        <FlatList data={works}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Image
            style={{width: 50, height: 50}}
            source={{uri: `${HOSTING}work/${item.url}`}}
          />} />
      );
    }}
  </Query>
};

export { Works };