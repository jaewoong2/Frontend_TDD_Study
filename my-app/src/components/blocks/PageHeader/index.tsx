import { TopNav } from 'components/atoms';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function PageHeader() {
  const [pathName, setPathName] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    setPathName(() => {
      switch (pathname) {
        case '/':
          return '할 일 목록';
        case '/add':
          return '할 일 추가';
        default: {
          if (pathname.startsWith('/detail')) {
            return '할 일 상세';
          }
          return 'Error!';
        }
      }
    });
  }, [pathname]);
  return <TopNav left={<Link to="/">Back</Link>}>{pathName}</TopNav>;
}

export default PageHeader;
