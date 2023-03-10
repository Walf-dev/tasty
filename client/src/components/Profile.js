import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersAction } from "../redux/order/orderActionCreators";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Link,
  Center,
} from "@chakra-ui/react";
import formatDate from "../helpers/formatDate";
import SpinnerReusable from "./common/Spinner";

const Profile = () => {
  const { orders, loading, error } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!orders) {
      dispatch(getOrdersAction());
    }
  }, [dispatch, orders]);

  if (loading) {
    return (
      <Center>
        <SpinnerReusable size="xl" />
      </Center>
    );
  }
  if (error) {
    <Center>An error has occurred</Center>;
  }

  return (
    <>
      <Text textAlign="right" fontWeight="semibold" mb="20px">
        Hello ✌{user && user.lastName}
      </Text>

      <Text fontWeight="semibold">Orders</Text>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Reference</Th>
            <Th>Created At</Th>
            <Th>Total Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders ? (
            orders.map((order, idx) => {
              return (
                <Tr key={idx}>
                  <Td>
                    <p href={`/order/${order._id}`}>{order.reference}</p>
                  </Td>
                  <Td>{formatDate(order.createdAt)}</Td>
                  <Td>{order.cart.totalAmount} XAF</Td>
                </Tr>
              );
            })
          ) : (
            <p>No order yet</p>
          )}
        </Tbody>
      </Table>
    </>
  );
};

export default Profile;
