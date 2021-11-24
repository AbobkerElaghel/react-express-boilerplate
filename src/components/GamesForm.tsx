import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getTopByPlayers, getTopByPlaytime } from '../API/game';
import OptionsType from '../interfaces/options.interface';



interface GameForm {
    type: 'playtime' | 'player';
}

const GamesForm = (props: GameForm) => {
  const [rows, setRows] = useState([]);
  const columns: GridColDef[] = [
    { field: 'id', headerName: "id", width: 70, hide: true },
    { field: 'game', headerName: 'Game', width: 330 },
    { field: 'genre', headerName: 'Genre', width: 130 },
    { field: 'platforms', headerName: 'Platforms', width: 400, renderCell: ({ value }) => value.map((platform: string, index: number) => <>{!index ? <div>{platform}</div> : <div>, {platform}</div>}</>) },
    { field: 'totalPlayTime', headerName: 'Total Play Time', width: 150 },
    { field: 'totalPlayers', headerName: 'Total Player', width: 150 }
  ];
  const optionsDefaultValue: OptionsType = {
    genre: "",
    platform:""
  };
  const [options, setOptions] = useState<OptionsType>(optionsDefaultValue);

  useEffect(() => {
      switch (props.type) {
          case "player":
            getTopByPlayers(options.genre, options.platform)
              .then(({ data }) => {
                  setRows(data);
              });
              break;
          case "playtime":
            getTopByPlaytime(options.genre, options.platform)
                .then(({ data }) => {
                    setRows(data)
                });
              break;
          default:
              break;
      }
  }, [options]);

  return (
    <main className="m-4 bg-gray-50 h-full ">
      <Paper elevation={5}>
        <section className="mx-4 pt-4">
          <h1 className="text-lg md:text-2xl font-semibold">{`Games with the top ${props.type}`}</h1>
          <div className="p- flex flex-col md:flex-row my-4">
            <TextField onChange={(e) => {
              setOptions({...options, platform: e.target.value})
            }} label="Platform" size="small" variant="outlined" />
            <span className="md:mx-2 my-2 "/>
            <TextField onChange={(e) => {
              setOptions({...options, genre: e.target.value})
            }} label="Genre" size="small" variant="outlined" />
          </div>
        </section>

        <Paper elevation={3}>
          <section className="w-full h-96">
            <DataGrid
              disableSelectionOnClick
              disableColumnSelector
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </section>
        </Paper>
      </Paper>
    </main>
  );
}

export default GamesForm;