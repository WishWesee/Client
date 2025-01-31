export interface toolBarIconListType {
  type: string;
  defaultIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  activeIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  title?: string;
}
