import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// yıldız ikonu react icons
import { AiFillStar } from "react-icons/ai";

export default function Home() {
  const data = {
    title: "iPhone 15 Pro Max 5G 256GB",
    description: "Card Description",
    imageUrl: "/images/placeholder.jpg",
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Toaster />

      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
        <div className="grid grid-cols-5 gap-3 z-10 mt-28">
          <Card className="max-w-72">
            <CardHeader>
              <CardTitle className="truncate">{data.title}</CardTitle>
              <CardDescription>
                <Link
                  href="#"
                  className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                >
                  Apple
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="justify-center">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
            <CardFooter className="flex-col items-start justify-center">
              <span className="mb-1   font-thin text-sm">Amazon.com.tr</span>
              <span className="mb-4 font-bold text-2xl">71.299,00 TL</span>
              <Drawer>
                <DrawerTrigger className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Detaylar
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="font-bold text-2xl flex justify-between">
                      <div>{data.title}</div>
                      <Button variant={"outline"}>
                        <AiFillStar className="text-yellow-500 font-semibold text-2xl"></AiFillStar>
                      </Button>
                    </DrawerTitle>
                    <DrawerDescription>
                      <Link
                        href="#"
                        className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                      >
                        Apple
                      </Link>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="mt-auto flex gap-2 p-4 w-full h-auto">
                    <div className="w-1/4">
                      <Carousel className="justify-center">
                        <CarouselContent>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                        </CarouselContent>
                      </Carousel>
                    </div>
                    <div className="w-3/4">
                      <span className="font-medium text-lg mb-6">
                        List of stores
                      </span>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Store</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Link
                                href="Amazon.com"
                                target="_blank"
                                className="hover:underline"
                              >
                                Amazon.com.tr
                              </Link>
                            </TableCell>
                            <TableCell>iPhone 15 Pro Max 5G 256GB</TableCell>
                            <TableCell>
                              6
                              <span className="ml-1 text-muted-foreground">
                                TAKSİT
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              71.299,00 TL
                            </TableCell>
                            <TableCell className="text-right space-x-4">
                              <Button variant={"default"}>Buy</Button>
                              <Button variant={"secondary"}>Target</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <DrawerFooter className="flex-row">
                    <DrawerClose className="w-4/12">
                      <Button variant={"danger"} className="w-full ">
                        Cancel
                      </Button>
                    </DrawerClose>
                    <Button className="w-8/12">Buy</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>
          <Card className="max-w-72">
            <CardHeader>
              <CardTitle className="truncate">{data.title}</CardTitle>
              <CardDescription>
                <Link
                  href="#"
                  className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                >
                  Apple
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="justify-center">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
            <CardFooter className="flex-col items-start justify-center">
              <span className="mb-1   font-thin text-sm">Amazon.com.tr</span>
              <span className="mb-4 font-bold text-2xl">71.299,00 TL</span>
              <Drawer>
                <DrawerTrigger className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Detaylar
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="font-bold text-2xl flex justify-between">
                      <div>{data.title}</div>
                      <Button variant={"outline"}>
                        <AiFillStar className="text-yellow-500 font-semibold text-2xl"></AiFillStar>
                      </Button>
                    </DrawerTitle>
                    <DrawerDescription>
                      <Link
                        href="#"
                        className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                      >
                        Apple
                      </Link>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="mt-auto flex gap-2 p-4 w-full h-auto">
                    <div className="w-1/4">
                      <Carousel className="justify-center">
                        <CarouselContent>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                        </CarouselContent>
                      </Carousel>
                    </div>
                    <div className="w-3/4">
                      <span className="font-medium text-lg mb-6">
                        List of stores
                      </span>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Store</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Link
                                href="Amazon.com"
                                target="_blank"
                                className="hover:underline"
                              >
                                Amazon.com.tr
                              </Link>
                            </TableCell>
                            <TableCell>iPhone 15 Pro Max 5G 256GB</TableCell>
                            <TableCell>
                              6
                              <span className="ml-1 text-muted-foreground">
                                TAKSİT
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              71.299,00 TL
                            </TableCell>
                            <TableCell className="text-right space-x-4">
                              <Button variant={"default"}>Buy</Button>
                              <Button variant={"secondary"}>Target</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <DrawerFooter className="flex-row">
                    <DrawerClose className="w-4/12">
                      <Button variant={"danger"} className="w-full ">
                        Cancel
                      </Button>
                    </DrawerClose>
                    <Button className="w-8/12">Buy</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>  <Card className="max-w-72">
            <CardHeader>
              <CardTitle className="truncate">{data.title}</CardTitle>
              <CardDescription>
                <Link
                  href="#"
                  className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                >
                  Apple
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="justify-center">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
            <CardFooter className="flex-col items-start justify-center">
              <span className="mb-1   font-thin text-sm">Amazon.com.tr</span>
              <span className="mb-4 font-bold text-2xl">71.299,00 TL</span>
              <Drawer>
                <DrawerTrigger className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Detaylar
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="font-bold text-2xl flex justify-between">
                      <div>{data.title}</div>
                      <Button variant={"outline"}>
                        <AiFillStar className="text-yellow-500 font-semibold text-2xl"></AiFillStar>
                      </Button>
                    </DrawerTitle>
                    <DrawerDescription>
                      <Link
                        href="#"
                        className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                      >
                        Apple
                      </Link>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="mt-auto flex gap-2 p-4 w-full h-auto">
                    <div className="w-1/4">
                      <Carousel className="justify-center">
                        <CarouselContent>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                        </CarouselContent>
                      </Carousel>
                    </div>
                    <div className="w-3/4">
                      <span className="font-medium text-lg mb-6">
                        List of stores
                      </span>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Store</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Link
                                href="Amazon.com"
                                target="_blank"
                                className="hover:underline"
                              >
                                Amazon.com.tr
                              </Link>
                            </TableCell>
                            <TableCell>iPhone 15 Pro Max 5G 256GB</TableCell>
                            <TableCell>
                              6
                              <span className="ml-1 text-muted-foreground">
                                TAKSİT
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              71.299,00 TL
                            </TableCell>
                            <TableCell className="text-right space-x-4">
                              <Button variant={"default"}>Buy</Button>
                              <Button variant={"secondary"}>Target</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <DrawerFooter className="flex-row">
                    <DrawerClose className="w-4/12">
                      <Button variant={"danger"} className="w-full ">
                        Cancel
                      </Button>
                    </DrawerClose>
                    <Button className="w-8/12">Buy</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>  <Card className="max-w-72">
            <CardHeader>
              <CardTitle className="truncate">{data.title}</CardTitle>
              <CardDescription>
                <Link
                  href="#"
                  className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                >
                  Apple
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="justify-center">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
            <CardFooter className="flex-col items-start justify-center">
              <span className="mb-1   font-thin text-sm">Amazon.com.tr</span>
              <span className="mb-4 font-bold text-2xl">71.299,00 TL</span>
              <Drawer>
                <DrawerTrigger className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Detaylar
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="font-bold text-2xl flex justify-between">
                      <div>{data.title}</div>
                      <Button variant={"outline"}>
                        <AiFillStar className="text-yellow-500 font-semibold text-2xl"></AiFillStar>
                      </Button>
                    </DrawerTitle>
                    <DrawerDescription>
                      <Link
                        href="#"
                        className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                      >
                        Apple
                      </Link>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="mt-auto flex gap-2 p-4 w-full h-auto">
                    <div className="w-1/4">
                      <Carousel className="justify-center">
                        <CarouselContent>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                        </CarouselContent>
                      </Carousel>
                    </div>
                    <div className="w-3/4">
                      <span className="font-medium text-lg mb-6">
                        List of stores
                      </span>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Store</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Link
                                href="Amazon.com"
                                target="_blank"
                                className="hover:underline"
                              >
                                Amazon.com.tr
                              </Link>
                            </TableCell>
                            <TableCell>iPhone 15 Pro Max 5G 256GB</TableCell>
                            <TableCell>
                              6
                              <span className="ml-1 text-muted-foreground">
                                TAKSİT
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              71.299,00 TL
                            </TableCell>
                            <TableCell className="text-right space-x-4">
                              <Button variant={"default"}>Buy</Button>
                              <Button variant={"secondary"}>Target</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <DrawerFooter className="flex-row">
                    <DrawerClose className="w-4/12">
                      <Button variant={"danger"} className="w-full ">
                        Cancel
                      </Button>
                    </DrawerClose>
                    <Button className="w-8/12">Buy</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>  <Card className="max-w-72">
            <CardHeader>
              <CardTitle className="truncate">{data.title}</CardTitle>
              <CardDescription>
                <Link
                  href="#"
                  className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                >
                  Apple
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="justify-center">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
            <CardFooter className="flex-col items-start justify-center">
              <span className="mb-1   font-thin text-sm">Amazon.com.tr</span>
              <span className="mb-4 font-bold text-2xl">71.299,00 TL</span>
              <Drawer>
                <DrawerTrigger className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Detaylar
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="font-bold text-2xl flex justify-between">
                      <div>{data.title}</div>
                      <Button variant={"outline"}>
                        <AiFillStar className="text-yellow-500 font-semibold text-2xl"></AiFillStar>
                      </Button>
                    </DrawerTitle>
                    <DrawerDescription>
                      <Link
                        href="#"
                        className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                      >
                        Apple
                      </Link>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="mt-auto flex gap-2 p-4 w-full h-auto">
                    <div className="w-1/4">
                      <Carousel className="justify-center">
                        <CarouselContent>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                        </CarouselContent>
                      </Carousel>
                    </div>
                    <div className="w-3/4">
                      <span className="font-medium text-lg mb-6">
                        List of stores
                      </span>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Store</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Link
                                href="Amazon.com"
                                target="_blank"
                                className="hover:underline"
                              >
                                Amazon.com.tr
                              </Link>
                            </TableCell>
                            <TableCell>iPhone 15 Pro Max 5G 256GB</TableCell>
                            <TableCell>
                              6
                              <span className="ml-1 text-muted-foreground">
                                TAKSİT
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              71.299,00 TL
                            </TableCell>
                            <TableCell className="text-right space-x-4">
                              <Button variant={"default"}>Buy</Button>
                              <Button variant={"secondary"}>Target</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <DrawerFooter className="flex-row">
                    <DrawerClose className="w-4/12">
                      <Button variant={"danger"} className="w-full ">
                        Cancel
                      </Button>
                    </DrawerClose>
                    <Button className="w-8/12">Buy</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>  <Card className="max-w-72">
            <CardHeader>
              <CardTitle className="truncate">{data.title}</CardTitle>
              <CardDescription>
                <Link
                  href="#"
                  className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                >
                  Apple
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="justify-center">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={
                        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                      }
                      alt={data.title}
                      width={300}
                      height={300}
                      className="rounded-md"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </CardContent>
            <CardFooter className="flex-col items-start justify-center">
              <span className="mb-1   font-thin text-sm">Amazon.com.tr</span>
              <span className="mb-4 font-bold text-2xl">71.299,00 TL</span>
              <Drawer>
                <DrawerTrigger className="w-full h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Detaylar
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="font-bold text-2xl flex justify-between">
                      <div>{data.title}</div>
                      <Button variant={"outline"}>
                        <AiFillStar className="text-yellow-500 font-semibold text-2xl"></AiFillStar>
                      </Button>
                    </DrawerTitle>
                    <DrawerDescription>
                      <Link
                        href="#"
                        className="transition-all ease-in-out duration-300 font-thin hover:font-semibold"
                      >
                        Apple
                      </Link>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="mt-auto flex gap-2 p-4 w-full h-auto">
                    <div className="w-1/4">
                      <Carousel className="justify-center">
                        <CarouselContent>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-1_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                          <CarouselItem>
                            <Image
                              src={
                                "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129895-2_large.jpg"
                              }
                              alt={data.title}
                              width={300}
                              height={300}
                              className="rounded-md"
                            />
                          </CarouselItem>
                        </CarouselContent>
                      </Carousel>
                    </div>
                    <div className="w-3/4">
                      <span className="font-medium text-lg mb-6">
                        List of stores
                      </span>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Store</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              <Link
                                href="Amazon.com"
                                target="_blank"
                                className="hover:underline"
                              >
                                Amazon.com.tr
                              </Link>
                            </TableCell>
                            <TableCell>iPhone 15 Pro Max 5G 256GB</TableCell>
                            <TableCell>
                              6
                              <span className="ml-1 text-muted-foreground">
                                TAKSİT
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              71.299,00 TL
                            </TableCell>
                            <TableCell className="text-right space-x-4">
                              <Button variant={"default"}>Buy</Button>
                              <Button variant={"secondary"}>Target</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                  <DrawerFooter className="flex-row">
                    <DrawerClose className="w-4/12">
                      <Button variant={"danger"} className="w-full ">
                        Cancel
                      </Button>
                    </DrawerClose>
                    <Button className="w-8/12">Buy</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>
        </div>

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </main>
  );
}
