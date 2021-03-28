import { useState, useEffect, useCallback } from 'react';
import _debounce from 'lodash/debounce';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CircularProgress from '@material-ui/core/CircularProgress';
import RepositoryModel from '../../models/Repository';
import Card from '../../components/Card';
import styles from './styles';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
  },
});

const initialRepositories = [];
const initialParams = {
  q: '',
  sort: '',
  order: 'desc',
  per_page: 10,
  page: 1,
};

const isBottom = (event) =>
  event.target.scrollHeight - event.target.scrollTop ===
  event.target.clientHeight;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState(initialRepositories);
  const [params, setParams] = useState(initialParams);
  const [content, setContent] = useState([]);

  const fetchRepositories = useCallback(async (params) => {
    setIsLoading(true);

    const { status, data } = await RepositoryModel.getList(params);
    if (status === 200) {
      setRepositories(data);
    }

    setIsLoading(false);
  }, []);
  const handleQueryStringChange = useCallback((e) => {
    setContent([]);
    setParams((prevParams) => ({ ...prevParams, q: e.target.value, page: 1 }));
  }, []);
  const debouncedHandleQueryStringChange = _debounce(
    handleQueryStringChange,
    500
  );
  const handleScroll = useCallback((event) => {
    if (isBottom(event)) {
      setParams((prevParams) => ({ ...prevParams, page: prevParams.page + 1 }));
    }
  }, []);
  const debouncedHandleScroll = _debounce(handleScroll, 1000);

  useEffect(() => {
    setContent((prevContent) => [...prevContent, ...repositories]);
  }, [repositories]);
  useEffect(() => {
    if (params.q.length > 0) {
      fetchRepositories(params);
    } else {
      setContent([]);
    }
  }, [params, fetchRepositories]);
  return (
    <div className={styles.layout}>
      <div className={styles.top}>
        <div className={styles.title}>Hello Dcard</div>
        <div className={styles.subTitle}>Start Home Test Coding!</div>
        <ThemeProvider theme={outerTheme}>
          <OutlinedInput
            autoFocus
            onChange={debouncedHandleQueryStringChange}
            classes={{
              root: styles.outlinedInputRoot,
            }}
          />
        </ThemeProvider>
      </div>
      <div className={styles.content} onScroll={debouncedHandleScroll}>
        {content.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        {isLoading && <CircularProgress />}
      </div>
    </div>
  );
};

export default App;
