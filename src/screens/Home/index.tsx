import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function Home() {
   const [category, setCategory] = useState('')

   const appointments = [{
      id: '1',
      guild: {
         id: '1',
         name: 'Lendários',
         icon: null,
         owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'Chegando no challenger sem perder 1 partida'
   }]

   function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId)
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Profile />
            <ButtonAdd />
         </View>

         <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
         />

         <View style={styles.content}>
            <ListHeader
               title='Partidas agendadas'
               subtitle='Total: 6'
            />
            <FlatList
               data={appointments}
               keyExtractor={item => item.id}
               renderItem={({ item }) => {
                  return (
                     <Appointment
                        data={item}
                     />
                  )
               }}
               ItemSeparatorComponent={() => {
                  return (<ListDivider />)
               }}
               style={styles.matches}
               showsVerticalScrollIndicator={false}
            />

         </View>

      </View>
   );
}