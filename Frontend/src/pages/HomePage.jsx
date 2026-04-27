import { Container, VStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <Container maxW="container.xl" py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}>
                    Current Products 🚀
                </Text>
                <Text fontSize={"xl"} alignItems={"center"} fontWeight={"bold"} color={'gray.500'}>
                    No Product Found 😢 {" "}
                    <Link to={"/create"}>
                        <Text as={"span"} color="blue.500" _hover={{ direction: "underline" }}>
                            Create Product
                        </Text>
                    </Link>
                </Text>
            </VStack>
        </Container>
    )
}

export default HomePage