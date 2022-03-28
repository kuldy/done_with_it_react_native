import React, { useState } from 'react'
import { FlatList, View, Text } from 'react-native'

import ListItem from '../components/list/ListItem'
import ListItemSeparator from '../components/list/ListItemSeparator'
import ListItemDeleteAction from '../components/list/ListItemDeleteAction'
import AppText from '../components/AppText'

const initialMessages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/logo4.png'),
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../assets/logo6.png'),
  },
  {
    id: 3,
    title: 't3',
    description: 'd3',
    image: require('../assets/logo7.png'),
  },
  {
    id: 4,
    title: 't4',
    description: 'd4',
    image: require('../assets/logo8.png'),
  }
]

const messagesAfterRefresh = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/logo4.png'),
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../assets/logo6.png'),
  },

]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)
  const handleDeleteListItems = message => {
    setMessages(messages.filter(m => m.id !== message.id))
  }

  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) => <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image}
        onPress={() => console.log('itme tapped', item)}
        renderRightActions={() => (<ListItemDeleteAction onPress={() => handleDeleteListItems(item)} />)}
      />}
      ItemSeparatorComponent={() => <ListItemSeparator />}
      refreshing={refreshing}
      onRefresh={() => setMessages(messagesAfterRefresh)}
    />
  )
}

export default MessagesScreen
