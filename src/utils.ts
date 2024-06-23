// Format the date to a string
function formatDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalize the first letter
function capitalize(str: string): string {
	if (typeof str !== "string" || str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };

/**
 * Returns collection entries matching a value for a given field
 * @param {string} type - The type of collection such as "blog"
 * @param {string} term - The field to search on such as "tags" or "author"
 * @param {string} value - The value to match such as "Popular"
 * @param {boolean} reverse - Sort with oldest posts first
 * @returns {Array<Object>}
 */
export const getCollectionFilter = async (
	type: string,
	term: string,
	value: string,
	reverse = false
): Promise<Array<Object>> => {
	const items = await getCollection(type, true, reverse);

	const slug = slugify(value);

	return items.filter((item: any) => {
		const values: Array<string> = [];
		if (Array.isArray(item.data[term])) {
			values.push(...item.data[term]);
		} else if (item.data[term]?.slug) {
			values.push(item.data[term].slug);
		}

		return values.map((value) => slugify(value)).includes(slug);
	});
};