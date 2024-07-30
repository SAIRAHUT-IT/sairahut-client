export const elemental_parser = (val: string): string => {
	const x: { [key: string]: string } = {
		FIRE: 'หุบเขาพันแสง',
		WATER: 'ท่าเรือบงกชนฤมิตร',
		EARTH: 'เมืองลู่จิ้ง',
		AIR: 'หุบเขาเหมันต์',
		LIGHTING: 'แนวเขาอัสนีราตรี',
		PLANT: 'เมืองเลี่ยงหลิน'
	};

	return x[val.toUpperCase()] || 'สำนักยังไม่เปิดเผย';
};
