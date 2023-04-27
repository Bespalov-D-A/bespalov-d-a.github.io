import Skeleton from '@mui/material/Skeleton';

interface ISkeleton {
  isLoad: boolean;
  component: () => any;
}

const SkeletonComp: React.FC<ISkeleton> = ({ isLoad, component }) => {
  console.log(component());
  return (
    <>
      {isLoad ? (
        <Skeleton variant="rectangular">{component()}</Skeleton>
      ) : (
        component()
      )}
    </>
  );
};

export default SkeletonComp;
