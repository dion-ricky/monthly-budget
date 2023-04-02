import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  createTableColumn,
  makeStyles,
} from "@fluentui/react-components";

const items = [
  {
    id: 1,
    category: "Food",
    planned: 0,
    actual: 100000,
  },
  {
    id: 2,
    category: "Gifts",
    planned: 0,
    actual: 50000,
  },
];

const columns = [
  createTableColumn({
    columnId: "category",
    compare: (a, b) => {
      return a.category.localeCompare(b.category);
    },
    renderHeaderCell: () => {
      return "";
    },
    renderCell: (item) => {
      return item.category;
    },
  }),
  createTableColumn({
    columnId: "planned",
    renderHeaderCell: () => {
      return "Planned";
    },
    renderCell: (item) => {
      return item.planned.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  }),
  createTableColumn({
    columnId: "actual",
    renderHeaderCell: () => {
      return "Actual";
    },
    renderCell: (item) => {
      return item.actual.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  }),
  createTableColumn({
    columnId: "diff",
    renderHeaderCell: () => {
      return "Diff.";
    },
    renderCell: (item) => {
      return (item.planned - item.actual).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  }),
];

const useStyles = makeStyles({
  root: {
    marginRight: "4rem",
  },
});

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <DataGrid
        items={items}
        columns={columns}
        sortable
        getRowId={(item) => item.id}
        defaultSortState={{
          sortColumn: "category",
          sortDirection: "ascending",
        }}
      >
        <DataGridHeader>
          <DataGridRow>
            {({ renderHeaderCell }) => (
              <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
            )}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody>
          {({ item, rowId }) => (
            <DataGridRow key={rowId}>
              {({ renderCell }) => (
                <DataGridCell>{renderCell(item)}</DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  );
};
