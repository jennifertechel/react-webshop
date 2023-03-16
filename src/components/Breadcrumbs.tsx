import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Breadcrumbs() {
  return (
    <Breadcrumb marginLeft="20px">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Startsida
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Produkt</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
