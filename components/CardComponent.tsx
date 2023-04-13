import { Button, Card, Col, Text } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: "400" });

interface Props {
  title: string;
  subtitle: string;
  content: string;
  path: string;
}

export const CardComponent = ({ title, subtitle, content, path }: Props) => {
  return (
    <Card css={{ maxWidth: 400, backgroundColor:'#f9ece4'}} className={`${lato.className}`}>
      <Card.Header css={{ backgroundColor: "#99df7b" }}>
        <Col>
          <Text
            size={14}
            weight={"bold"}
            transform="uppercase"
            
          >
            {title}
          </Text>
          <Text size={25} >
            {subtitle}
          </Text>
        </Col>
      </Card.Header>
      <Card.Divider />
      <Card.Body className="flex flex-col">
        <Text className={`${lato.className} line-clamp-2`} size={20}>
          {content}
        </Text>
        <Link href={path}>
          <Button
            color={"success"}            
            auto
            ghost
            css={{width:'100%', marginTop:'$5'}}
          >Saber más
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
