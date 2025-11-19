import { useNavigate, useParams, useLocation } from "react-router";

export default function useRouting() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const goTo = (path: string) => navigate(path);

  const goBack = () => navigate(-1);

  const pathname = location.pathname;

  const queryParams = new URLSearchParams(location.search);

  const getQuery = (key: string) => queryParams.get(key);
  const hasQuery = (key: string) => queryParams.has(key);

  const buildQuery = <T extends string | number>(obj: Record<string, T>) => {
    const qp = new URLSearchParams();
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== undefined && value !== null) qp.set(key, String(value));
    });
    return qp.toString();
  };

  const goToWithQuery = (
    path: string,
    query: Record<string, string | number>
  ) => navigate(`${path}?${buildQuery(query)}`);

  return {
    navigate,
    params,
    location,
    pathname,
    goBack,
    goTo,
    queryParams,
    getQuery,
    hasQuery,
    goToWithQuery,
  };
}
