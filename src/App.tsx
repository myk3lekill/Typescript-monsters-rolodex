import './App.css';
import { useState, useEffect, ChangeEvent } from 'react'
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

export type Monster = {
  id: string,
  name: string,
  email: string
}

// Functional Component (Hooks)
const App = () => {

  const [searchField, setSearchField] = useState('')//[value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //UseEffetc will execute fetch on mount aviding infinte loop of re-rendering
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Array<Monster>>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users)
    }
    fetchUsers()
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;