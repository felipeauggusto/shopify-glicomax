import { Check } from "lucide-react";
import { product } from "@/data/product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductFeatures = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Características do Produto
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-success" />
                </div>
                <p className="text-sm md:text-base">{feature}</p>
              </div>
            ))}
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Especificações Técnicas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-3 border-b last:border-0"
                  >
                    <span className="font-medium text-muted-foreground">
                      {spec.label}:
                    </span>
                    <span className="font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
