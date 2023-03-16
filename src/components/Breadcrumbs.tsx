import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Breadcrumbs({ title }: { title: string }) {
  return (
    <Breadcrumb marginLeft="20px">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Startsida
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">{title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
