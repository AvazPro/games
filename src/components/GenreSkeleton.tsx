import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={"hidden"} width={345}>
      <Skeleton height={10} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GenreSkeleton;
