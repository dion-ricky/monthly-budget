import Title from "./components/Title";
import ExpenseIncome from "./components/ExpenseIncome";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
});

export const Summary = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Title />
      <ExpenseIncome />
    </div>
  );
};
