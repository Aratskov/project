import style from './DynamicsList.module.css';

const DynamicsList = () => {
  return (
    <>
      <ul className={style.list}>
        <li>
          <div className={style.list_block}>
            <p className={style.label}>Income, &#8372;</p>
            <p className={style.amount}>600</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p className={style.label}>Expenses, &#8372;</p>
            <p className={style.amount}>300</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p className={style.label}>Accumulated, &#8372;</p>
            <p className={style.amount}>300</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p className={style.label}>Plan, &#8372;</p>
            <p className={style.amount}>450</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p className={style.label}>Plan, %</p>
            <p className={style.amount}>70%</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default DynamicsList;
