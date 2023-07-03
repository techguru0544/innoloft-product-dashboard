import { Images } from 'assets/images';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { DASHBOARD_ROUTE } from 'routes/bashRoutes';

interface BreadcrumbPropsType {
  linkName: string;
}

const Breadcrumb = (props: BreadcrumbPropsType) => {
  const { linkName } = props;
  const { pathname } = useLocation();
  const pathNames = pathname.split('/').filter(Boolean);

  return (
    <div className="flex items-center">
      <Link className="font-bold" to={DASHBOARD_ROUTE.HOME}>
        <img src={Images.HomeIcon} alt="Home" />
      </Link>
      {pathNames.map((name, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathNames.length - 1;
        return isLast ? (
          <span className="flex items-center" key={index}>
            <img className="breadcrumbArrow" src={Images.BreadcrumbArrow} alt="Inno Breadcrumb Arrow" />
            {linkName ? (
              <span className="greySmallContent font-semibold">{linkName}</span>
            ) : (
              <span className="greySmallContent font-semibold">{name.replace('-', ' ')}</span>
            )}
          </span>
        ) : (
          <span className="flex items-center" key={index}>
            <img className="breadcrumbArrow" src={Images.BreadcrumbArrow} alt="Inno Breadcrumb Arrow" />
            <NavLink to={routeTo} className="greySmallContent">
              {name}
            </NavLink>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
