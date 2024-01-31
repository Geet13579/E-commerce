import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// redux
import { getProducts } from "../redux_toolkit/features/product/productSlice"


import { Table, Button, Container, Pagination } from 'rsuite';
import HeaderPage from '../header.js';
import SidebarPage from '../sidebar.js';
import { mockUsers } from './mock';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { IconButton } from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import FormData from './modelForm.jsx'
import CloseIcon from '@rsuite/icons/Close';
import { Modal } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;



const styles = {
  width: 200,
  marginBottom: 10
};


const TablePage = () => {

  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();

  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };


  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const data1 = [];
  const productState = useSelector((state) => state?.product?.products?.data

  );

  if (productState && productState.length) {
    for (let i = 0; i < productState.length; i++) {
      data1.push({
        key: i + 1,
        title: productState[i].title,
        brand: productState[i].brand,
        category: productState[i].category,
        color: productState[i].color,
        price: `${productState[i].price}`,

      });
    }
    // console.log(data1)
  }

  const dataPage = data1.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });


  return (
    <Container>
      <SidebarPage />

      <Container>
        <HeaderPage />
        <Container style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>

          <div style={{ width: "90%", backgroundColor: "#fff", display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <InputGroup style={styles}>
                <Input />
                <InputGroup.Addon>
                  <SearchIcon />
                </InputGroup.Addon>
              </InputGroup>
            </div>
            <div>
              <IconButton onClick={() => handleOpen('md')} icon={<PlusIcon />}>Add</IconButton>
            </div>
          </div>
          <Modal size={size} open={open} onClose={handleClose} overflow={false}>
            <div onClick={handleClose} style={{ display: "flex", cursor: "pointer", flexDirection: "row-reverse" }}> <CloseIcon /></div>

            <Modal.Body>

              <FormData />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
              <Button onClick={handleClose} appearance="primary">
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        <Container style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>


          <Table
            height={500}
            data={dataPage}
            onRowClick={rowData => {
              console.log(rowData);
            }}
            sx={{
              '& .rs-table-scrollbar-vertical': {
                top: 'auto',
                right: 'auto'
              },
            }}

            style={{ width: "90%", boxShadow: 'rgba(34, 41, 47, 0.1) 0px 4px 24px', }}
          >

            <Column width={100} align="center" fixed>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="key" />
            </Column>

            <Column width={200} align="center">
              <HeaderCell>title</HeaderCell>
              <Cell dataKey="title" />
            </Column>

            <Column width={200}>
              <HeaderCell>category</HeaderCell>
              <Cell dataKey="category" />
            </Column>

            <Column width={200}>
              <HeaderCell>color</HeaderCell>
              <Cell dataKey="color" />
            </Column>

            <Column width={200}>
              <HeaderCell>price</HeaderCell>
              <Cell dataKey="price" />
            </Column>

            <Column width={80} fixed="right">
              <HeaderCell>Action</HeaderCell>

              <Cell style={{ padding: '6px' }}>
                {rowData => (
                  <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
                    Edit
                  </Button>
                )}
              </Cell>
            </Column>
            
          </Table>
          
        </Container>
        <div style={{ padding: 20 }}>
            <Pagination
              prev
              next
              first
              last
              ellipsis
              boundaryLinks
              maxButtons={5}
              size="xs"
              layout={['total', '-', 'limit', '|', 'pager', 'skip']}
              total={dataPage.length}
              limitOptions={[10, 30, 50]}
              limit={limit}
              activePage={page}
              onChangePage={setPage}
              onChangeLimit={handleChangeLimit}
            />
          </div>
      </Container>
    </Container>
  );
};

export default TablePage