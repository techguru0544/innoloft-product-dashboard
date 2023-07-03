// import { Images } from 'assets/images';
import { Images } from 'assets/images';
import LeafletMap from 'components/common/LeafletMap';
import Video from 'components/common/Video';
import Breadcrump from 'components/common/breadcrumb/Breadcrumb';
import Button from 'components/common/button/Button';
import LoadingSpinner from 'components/common/loader/loader';
import LeftMenuCard from 'components/dashboard/LeftMenuCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT } from 'redux/actions/products/product.actions';
import { PRODUCT_DATA } from 'redux/reducers/products/product.slice';
import { useAppDispatch, useAppSelector } from 'redux/store';

interface MultiplDetailsListType {
  name: string;
  icon: string;
  details: any;
}

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const { loader, productData } = useAppSelector(PRODUCT_DATA);

  const [productDetails, setProductDetails] = useState<MultiplDetailsListType[]>([]);

  const fetchConfigs = (configId: number) => {
    dispatch(GET_PRODUCT(configId));
  };

  useEffect(() => {
    fetchConfigs(parseInt(productId ?? '6781'));
  }, [productId]);

  useEffect(() => {
    if (Object.keys(productData).length) {
      const detailsList = [
        {
          name: 'Technology',
          icon: Images.HomeIcon,
          details: productData?.categories
        },
        {
          name: 'Business Model',
          icon: Images.Search,
          details: productData?.businessModels
        },
        {
          name: 'TRL',
          icon: Images.InnoGroup,
          details: Array(productData?.trl)
        },
        {
          name: 'Costs',
          icon: Images.InnoOrganization,
          details: Array({ name: productData?.investmentEffort })
        }
      ];
      console.log({ productId, productData, detailsList });
      setProductDetails(detailsList);
    }
  }, [productData]);

  return loader ? (
    <LoadingSpinner />
  ) : (
    <div className="md:container grid md:grid-cols-4 gap-[30px] px-2.5 md:px-0 my-5">
      <div className="hidden md:block">
        <LeftMenuCard productData={productData} />
      </div>
      <div className="col-span-3">
        <div className="flex items-center">
          <Breadcrump linkName={productData?.['name'] ?? ''} />
          <Button
            disabled
            customClass="ml-auto"
            name="Edit"
            value="Edit"
            handleOnClick={() => console.log({ productId })}
          />
        </div>
        <div className="card border border-grey-card-border rounded mt-5">
          <div className="grid md:grid-cols-4">
            <div className="col-span-3 border-r">
              <div className="relative">
                <img
                  className="w-[396px] h-[180px] md:w-[746px] md:h-[300px]"
                  src={productData?.['picture']}
                  alt={productData.name}
                />
                <div className="absolute top-0 left-0 bg-white text-blue-heading">
                  {/* <img className="bg-theme text-sm font-medium inline" src={Images.InnoMessenger} /> */}
                  <span className="text-sm font-medium m-0">{productData?.type?.name}</span>
                </div>
              </div>
              <div className="p-5">
                <h1>{productData?.name}</h1>
                <p className="greySmallContent mt-2.5" dangerouslySetInnerHTML={{ __html: productData?.description }} />
              </div>
            </div>
            <div className="p-5 flex flex-col gap-2.5">
              <h3 className="text-blue-heading text-base font-semibold mb-2.5">Offered By</h3>
              <img
                className="w-[200px] h-[37px]"
                src={productData?.['company']?.['logo']}
                alt={productData?.['company']?.['name']}
              />

              <div className="flex items-center">
                <img
                  src={productData?.['user']?.['profilePicture']}
                  alt="Profile Avatar"
                  className="w-[60px] h-[60px] rounded-full mr-4"
                />
                <div className="text-grey-desc text-sm">
                  <h2 className="font-semibold">
                    {productData?.['user']?.['firstName']} {productData?.['user']?.['lastName']}
                  </h2>
                  <p className="font-normal">{productData?.['company']?.['name']}</p>
                </div>
              </div>

              <div className="flex items-start">
                <img src={Images.InnoLocation} alt="Location Pin" className="w-4 h-4" />
                <div className="text-grey-desc text-sm font-normal">
                  <h2>
                    {productData?.company?.address?.street} {productData?.company?.address?.house},
                  </h2>
                  <p>
                    {productData?.company?.address?.zipCode} {productData?.company?.address?.city?.name},{' '}
                    {productData?.company?.address?.country?.name}{' '}
                  </p>
                </div>
              </div>
              <div className="text-center pb-5 flex justify-center">
                <LeafletMap mapData={productData?.company?.address} />
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-grey-card-border rounded mt-5 px-2.5 py-[30px] md:p-5">
          <h3 className="mb-2.5">Video</h3>
          <div className="flex flex-col justify-center md:justify-start w-full h-[210px] md:w-[715px] md:h-[400px] mx-auto">
            <Video videoUrl={productData?.video} />
          </div>
        </div>
        <div className="card border border-grey-card-border rounded mt-5 p-2.5 md:p-5">
          <h3 className="mb-5">Product Details</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {productDetails?.map((detailsItem, index) => (
              <div className="flex items-start gap-1.5" key={index}>
                <img className="mt-1" src={detailsItem.icon} alt="" />
                {detailsItem.details?.length && (
                  <div>
                    <p>{detailsItem?.name}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5 text-center">
                      {detailsItem.details?.map((techItem: any, index: number) => (
                        <span
                          key={`${techItem?.name}_${index}`}
                          className="rounded-full bg-[#E5E7EB] text-grey-desc text-sm font-normal px-3.5 py-1.5"
                        >
                          {techItem?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
