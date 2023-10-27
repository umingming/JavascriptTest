function snakeToCamel(snake) {
    return snake
				.toLowerCase()
				.replace(/_./g, letter => letter.charAt(1).toUpperCase());
}

function snakeToPascal(snake) {
    return snakeToCamel(snake)
                .replace(/^[a-z]/, letter => letter.toUpperCase());
}

function snakeToDescription(snake) {
    return snakeToPascal(snake)
                .replace(/([a-z])([A-Z])/g, "$1 $2");
}

const columns = `setting_name
sequence_no
setting_value
caption
description
data_type
min_value
max_value
`.split(`
`)

columns.forEach(column => console.log(snakeToPascal(column)))