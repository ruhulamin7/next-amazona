import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  section: { marginTop: 10, marginBottom: 10 },
  brand: { fontSize: '1.5rem', fontWeight: 'bold' },
  grow: { flexGrow: 1 },
  main: { minHeight: '80vh' },
  footer: { textAlign: 'center', margin: '20px 0 10px 0' },
});

export default useStyles;
