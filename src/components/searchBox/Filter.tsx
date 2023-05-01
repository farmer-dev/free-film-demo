import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { SearchBox } from './SearchBox';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { changeKeyword, updateSearchFilter } from './searchBoxSlice';

const DEBOUNCE_DELAY = 1500;

const filterType = ['movie', 'series', 'episode'];
export const Filter = () => {
  const { control, handleSubmit, formState, watch, getValues, register } = useForm({
    defaultValues: {
      keyword: '',
      filter: '',
    },
  });

  const dispatch = useDispatch();
  const debouncedChangeHandler = useMemo(
    () => debounce((values) => dispatch(updateSearchFilter(values)), DEBOUNCE_DELAY),
    []
  );

  useEffect(() => {
    debouncedChangeHandler(getValues());
  }, [watch()]);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);
  return (
    <Box
      component={'form'}
      //   onSubmit={handleSubmit(onSubmit)}
      display={'flex'}
      sx={{ width: '100%', flexGrow: 1 }}
    >
      <FormControl sx={{ m: 1, flexGrow: 1 }}>
        <SearchBox field={{ ...register('keyword') }} />
      </FormControl>
      <Controller
        name="filter"
        control={control}
        render={({ field }) => {
          return (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Filter</InputLabel>
              <Select
                // value={age}
                {...field}
                label="Fitler"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {filterType.map((filterValue) => (
                  <MenuItem
                    key={filterValue}
                    sx={{ textTransform: 'capitalize' }}
                    value={filterValue}
                  >
                    {filterValue}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        }}
      />
    </Box>
  );
};
