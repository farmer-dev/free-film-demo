import Box from '@mui/material/Box';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { SearchBox } from './SearchBox';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { changeKeyword, updateSearchFilter } from './searchBoxSlice';
import { pageRoutes } from '../../routes';
import { isMatchRoute } from '../../utils/router';

const DEBOUNCE_DELAY = 1500;

const filterType = ['movie', 'series', 'episode'];

export const Filter = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomePage = isMatchRoute(pageRoutes.home, pathname);
  const { control, handleSubmit, formState, watch, getValues, register } = useForm({
    defaultValues: {
      keyword: '',
      filter: '',
    },
  });

  const dispatch = useDispatch();

  const navigateToHome = useCallback(() => {
    navigate(pageRoutes.home);
  }, [isHomePage]);

  const debouncedChangeHandler = useMemo(
    () =>
      debounce((values) => {
        navigateToHome();
        return dispatch(updateSearchFilter(values));
      }, DEBOUNCE_DELAY),
    []
  );
  useEffect(() => {
    const subscription = watch((value, { name, type }) => debouncedChangeHandler(value));
    return () => subscription.unsubscribe();
  }, [watch]);

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
                sx={{ textTransform: 'capitalize' }}
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
