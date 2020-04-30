
exports.up = function(knex) {
    return knex.schema
        .createTable('accounts', table => {
            table.increments();

            table.string('username', 255)
            .notNullable()
            .unique();

            table.string('email', 255)
            .notNullable()
            .unique();

            table.string('password', 255)
            .notNullable();

            table.string('displayName')
            .notNullable();

            table.string('gender')
        })

        .createTable('roles', table => {
            table.increments();

            table.string('roleType', 255)
            .notNullable(); 
        })

        .createTable('classTypes', table =>{
            table.increments();

            table.string('type')
        })

        .createTable('imgOptions', table =>{
            table.increments();

            table.string('url');
        })

        .createTable('days', table => {
            table.increments();

            table.string('day')
            .notNullable();
        })

        .createTable('classes', table => {
            table.increments();

            table.string('name')
            .notNullable();

            table.string('time')
            .notNullable();

            table.double('duration')
            .notNullable();

            table.string('intensity')
            .notNullable();

            table.string('location')
            .notNullable();

            table.integer('maxSize')
            .notNullable();

            table.integer('classType')
            .notNullable()
            .references('classTypes.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');

            table.integer('imgUrl')
            .notNullable()
            .references('imgOptions.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE')

            table.string('equipmentRequired');

            table.string('arrivalDescription');

            table.string('additionalInfo');

            table.double('cost')
            .notNullable();

            table.string('courseDescription')
            .notNullable();

            table.string('address')
            .notNullable();

            table.string('startDate')
            .notNullable();
        })

        // Join tables for many to many relationships
        .createTable('classDays', table => {
            table.integer('classId')
            .notNullable()
            .references('classes.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');
            
            table.integer('dayId')
            .notNullable()
            .references('days.id')
            .onDelete('RESTRICT') 
            .onUpdate('CASCADE');
        })

        .createTable('accountRoles', table => {
            table.integer('accountId')
            .notNullable()
            .references('accounts.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');

            table.integer('roleId')
            .notNullable()
            .references('roles.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');

            table.primary(['accountId', 'roleId']);
        })

        .createTable('classAttendees', table => {
            table
            .integer('accountId')
            .notNullable()
            .references('accounts.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');

            table
            .integer('classId')
            .notNullable()
            .references('classes.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');

            table.primary(['accountId', 'classId']);
        })

        .createTable('classInstructor', table => {
            table
            .integer('instructorId')
            .notNullable()
            .references('accounts.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');

            table
            .integer('classId')
            .notNullable()
            .references('classes.id')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE');

            table.primary(['instructorId', 'classId']);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('classInstructor')
        .dropTableIfExists('classAttendees')
        .dropTableIfExists('accountRoles')
        .dropTableIfExists('classDays')
        .dropTableIfExists('classes')
        .dropTableIfExists('imgOptions')
        .dropTableIfExists('classTypes')
        .dropTableIfExists('roles')
        .dropTableIfExists('days')
        .dropTableIfExists('accounts')
};
