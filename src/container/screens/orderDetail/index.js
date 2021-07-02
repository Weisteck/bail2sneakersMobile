import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { putCartStatus } from "../../../api/bail2sneakersDbApi";

const OrderDetailScreen = ({ route, navigation }) => {
  const { item } = route.params
  const statusList = [ "progressedAt", "orderedAt", "orderedPreparationAt", "deliveredAt", "endedAt", "canceledAt" ]
  const [ lastStatus, setLastStatus ] = useState({})

  const changeStepOfCart = async () => {
    if (item.order.history.endedAt === undefined)
      if (item.order.history.deliveredAt === undefined)
        if (item.order.history.orderedPreparationAt === undefined)
          if (item.order.history.orderedAt === undefined)
            setLastStatus ({ progressedAt: { date: item.order.history.progressedAt, status: "Pannier créer le" } })
          else setLastStatus  ({ orderedAt: { date: item.order.history.orderedAt, status: "Payé le " } })
        else setLastStatus ({ orderedPreparationAt: item.order.history.orderedPreparationAt })
      else setLastStatus ({ deliveredAt: item.order.history.deliveredAt })
    else setLastStatus ({ endedAt: item.order.history.endedAt })

    const nextStatus = statusList[statusList.indexOf(Object.keys(lastStatus)[0]) + 1]

    console.log("next status: ", nextStatus)
    const response = await putCartStatus(nextStatus)
    console.log(response)
  }

  return (
    <View>
      <Text>{ item._id }</Text>
      <Text>Progress at: { item.order.history.progressAt }</Text>
      <Text>Ordered at: { item.order.history.orderedAt }</Text>
      <Text>Order preparation at: { item.order.history.orderedPreparationAt }</Text>
      <Text>Delivered at: { item.order.history.deliveredAt }</Text>
      <Text>Ended at: { item.order.history.endedAt }</Text>
      <Text>Canceled at: { item.order.history.canceled }</Text>

      <Button title="Next step" onPress={ () => changeStepOfCart() }/>
    </View>
  );
}

export default OrderDetailScreen;
