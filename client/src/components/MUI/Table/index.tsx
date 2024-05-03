import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Contact = {
  name: string,
  relation: string,
  phone: string,
  email: string
}

function createData (
  name: string,
  age: number,
  morningStop: string,
  eveningStop: string,
  contacts: Array<Contact>,
) {
  return {
    name,
    age,
    morningStop,
    eveningStop,
    contacts,
  };
}

function Row (props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={sxTableContents}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={sxTableContents}>
          {row.name}
        </TableCell>
        <TableCell align="right" sx={sxTableContents}>{row.age}</TableCell>
        <TableCell align="right" sx={sxTableContents}>{row.morningStop}</TableCell>
        <TableCell align="right" sx={sxTableContents}>{row.eveningStop}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Contacts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Relation</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.contacts.map((contactRow) => (
                    <TableRow key={contactRow.name}>
                      <TableCell>{contactRow.name}</TableCell>
                      <TableCell>{contactRow.relation}</TableCell>
                      <TableCell align="right">{contactRow.phone}</TableCell>
                      <TableCell align="right">{contactRow.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const sunnyContacts = [
  {
    name: 'Daddy Anter',
    relation: 'father',
    phone: '123,455,678',
    email: 'mister@gmail.com'
  },
  {
    name: 'Mummy Anter',
    relation: 'Mother',
    phone: '987,765,432',
    email: 'misses@gmail.com'
  },
];

const samContacts = [
  {
    name: 'Daddy Bolge',
    relation: 'father',
    phone: '123,455,678',
    email: 'mister@gmail.com'
  },
  {
    name: 'Mummy Bolge',
    relation: 'Mother',
    phone: '987,765,432',
    email: 'misses@gmail.com'
  },
];

const rows = [
  createData('Sunny Anter', 24, 'Westminster stop 3', 'Victoria stop 1', sunnyContacts),
  createData('Sam Polge', 30, 'Victoria stop 1', 'Brixton stop 8', samContacts),
  createData('Tekraj Gurung', 40, 'Southwark stop 2', 'Westminster stop 3', samContacts),
  createData('Gerry Steffan', 31, 'Brixton stop 8', 'Victoria stop 1', samContacts),
];


const sxTableContainer = {
  borderRadius: 5,
};

const sxTable = {
  backgroundColor: 'white',
};

const sxTableHeadings = {
  fontSize: 22,
  fontFamily: 'Josefin Sans',
  fontWeight: 700,
  // color: 'white',
  // backgroundColor: 'white',
};

const sxTableContents = {
  fontSize: 18,
  fontFamily: 'Josefin Sans',
  fontWeight: 400,
  // color: 'black',
  // backgroundColor: 'white',
};

export default function CollapsibleTable () {
  return (
    <TableContainer sx={sxTableContainer} component={Paper}>
      <Table sx={sxTable} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={sxTableHeadings}/>
            <TableCell sx={sxTableHeadings}>Student Name</TableCell>
            <TableCell sx={sxTableHeadings} align="right">Age</TableCell>
            <TableCell sx={sxTableHeadings} align="right">Morning Stop</TableCell>
            <TableCell sx={sxTableHeadings} align="right">Evening Stop</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}