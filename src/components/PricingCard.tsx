import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type PricingCardProps = {
  title: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  recommended?: boolean;
  idealFor?: string;
  className?: string;
  ctaClassName?: string;
};

export function PricingCard({
  title,
  price,
  priceSuffix,
  description,
  features,
  ctaText,
  ctaLink,
  recommended = false,
  idealFor,
  className = "",
  ctaClassName = ""
}: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col border-border/50",
      recommended ? "border-primary ring-2 ring-primary shadow-lg" : "hover:border-primary/80 transition-colors",
      className
    )}>
      {recommended && (
        <Badge variant="default" className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1 items-center bg-accent text-accent-foreground">
          <Star className="w-4 h-4" />
          Recomandat
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline font-bold">{title}</CardTitle>
        {!idealFor && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{priceSuffix}</span>
        </div>
        {idealFor && (
            <div className="text-center text-sm text-muted-foreground mb-4">
                <p className="font-bold">Ideal pentru:</p>
                <p>{idealFor}</p>
            </div>
        )}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={cn("w-full", ctaClassName)} size="lg" variant={recommended ? 'default' : 'secondary'}>
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
