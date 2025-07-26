import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';

interface ResourceCardProps {
  type: 'wood' | 'metal' | 'gold' | 'stone';
  amount: number;
  onCollect: (amount: number) => void;
  icon: string;
  label: string;
  baseAmount: number;
}

const resourceGradients = {
  wood: 'bg-gradient-to-br from-wood to-wood-glow',
  metal: 'bg-gradient-to-br from-metal to-metal-glow',
  gold: 'bg-gradient-to-br from-gold to-gold-glow',
  stone: 'bg-gradient-to-br from-stone to-stone-glow',
};

export function ResourceCard({ type, amount, onCollect, icon, label, baseAmount }: ResourceCardProps) {
  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className={`absolute inset-0 opacity-10 ${resourceGradients[type]}`} />
      <CardHeader className="relative pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="text-2xl">{icon}</span>
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">
            {formatNumber(amount)}
          </div>
        </div>
        <Button 
          onClick={() => onCollect(baseAmount)}
          className={`w-full ${resourceGradients[type]} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
          size="lg"
        >
          Collecter +{baseAmount}
        </Button>
      </CardContent>
    </Card>
  );
}