import { useEffect } from 'react';
import CategoriesListItem from './CategoriesListItem/CategoriesListItem';
import s from './CategoriesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesSelector,
  getStatisticsDate,
} from 'redux/Statistics/StatisticsSelectors';
import { getCategories } from 'redux/Statistics/StatisticsOperations';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const date = useSelector(getStatisticsDate);

  // const month = 12;
  // // date[0].monthNumber;
  // const year = 2023;
  // // date[0].year;

  useEffect(() => {
    if (categories.length) return;
    if (date.langth > 0) {
      dispatch(
        getCategories({ month: date[0].monthNumber, year: date[0].year })
      );
    } // eslint-disable-next-line
  }, []);

  return (
    <div className={s.style}>
      {!categories.length ? (
        <div className={s.noty}>You have not added any transactions!</div>
      ) : (
        <ul>
          {categories.map(({ category, amount, percentage }) => (
            <CategoriesListItem
              category={category}
              amount={amount}
              percentage={percentage}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesList;
