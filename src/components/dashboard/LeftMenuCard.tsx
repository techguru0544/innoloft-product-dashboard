import { Images } from 'assets/images';

interface LeftMenuCardPropsType {
  productData: any;
}

const LeftMenuCard = (props: LeftMenuCardPropsType) => {
  const { productData } = props;

  const menuList = [
    {
      title: 'Home',
      icon: Images.HomeIcon
    },
    {
      title: 'Members',
      icon: Images.InnoGroup
    },
    {
      title: 'Organizations',
      icon: Images.InnoOrganization,
      children: []
    }
  ];

  return (
    <div className="card border border-grey-card-border rounded p-6">
      <div className="flex items-center">
        <img src={productData?.user?.['profilePicture']} alt="Profile Avatar" className="w-16 h-16 rounded-full mr-4" />
        <div className="text-blue-heading">
          <h2 className="text-lg font-semibold">
            {productData?.user?.['firstName']} {productData?.user?.['lastName']}
          </h2>
          <p className="text-base font-normal">{productData?.company?.name}</p>
        </div>
      </div>
      {menuList.map((menuItem, index) => (
        <div className="mt-4 flex items-center gap-3" key={index}>
          <img className="h-4 w-4" src={menuItem.icon} alt="Inno Home" />
          <h3 className="text-base font-normal">{menuItem.title}</h3>
          {Object.keys(menuItem).includes('children') && (
            <img className="h-4 w-4 ml-auto invert" src={Images.InnoDownArrow} alt="Inno Down Arrow" />
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftMenuCard;
