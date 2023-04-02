import { makeStyles } from "@fluentui/react-components";
import SummaryDataGrid from "./SummaryDataGrid";
import { H3 } from "../../../components/TypoHeaders";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  headerMargin: {
    marginBottom: "0.75rem",
  },
});

export default () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <H3 additionalStyles={[styles.headerMargin]}>Expense</H3>
        <SummaryDataGrid />
      </div>
      <div>
        <H3 additionalStyles={[styles.headerMargin]}>Income</H3>
        <SummaryDataGrid />
      </div>
    </div>
  );
};
