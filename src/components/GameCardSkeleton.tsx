import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {

    return (
        <Card borderRadius={10} overflow={'hidden'} width={345}>
            <Skeleton height={250} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton