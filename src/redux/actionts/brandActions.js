import { CREATE_BRAND } from '../types/types';

export const createBrand = brand => ({
	type: CREATE_BRAND,
	brand,
});
