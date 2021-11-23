import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getTopByPlaytime } from '../API/game';
import OptionsType from '../interfaces/options.interface';
import GamesForm from './GamesForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: "id", width: 70, hide: true },
  { field: 'game', headerName: 'Game', width: 130 },
  { field: 'genre', headerName: 'Genre', width: 130 },
  { field: 'platforms', headerName: 'Platforms', width: 200, renderCell: ({ value }) => value.map((platform: string, index: number) => <>{!index ? <div>{platform}</div> : <div>, {platform}</div>}</>) },
  { field: 'totalPlayTime', headerName: 'Total Play Time', width: 150 },
  { field: 'totalPlayers', headerName: 'Total Player', width: 150 }
];

const App = () => {
  const [rows, setRows] = useState([]);

  const optionsDefaultValue: OptionsType = {
    genre: "",
    platform:""
  };
  const [options, setOptions] = useState<OptionsType>(optionsDefaultValue);

  useEffect(() => {
    getTopByPlaytime(options.genre, options.platform)
      .then(({ data }) => {
        setRows(data)
      });
  }, [options]);

  return (
    <main>
      <GamesForm type="playtime"/>
      <GamesForm type="player"/>
    </main>
  );
}

export default App;