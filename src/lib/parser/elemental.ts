export const elemental_parser = (val: string): string => {
	const x = {
		FIRE: 'หุบเขาพันแสง',
		WATER: 'ท่าเรือบงกชนรฤมิตร',
		EARTH: 'เมืองลู่จิ้ง',
		AIR: 'หุบเขาเหมันต์',
		LIGHTING: 'แนวเขาอัสนีราตรี',
		PLANT: 'เมืองเลี่ยงหลิน'
	};
	return x[val] as string;
};
