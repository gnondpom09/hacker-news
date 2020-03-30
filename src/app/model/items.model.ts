// Imports
import { Item } from './item.model';

export interface Items {
    offset: number;
    limit: number;
    total: number;
    results: Item[];
}
