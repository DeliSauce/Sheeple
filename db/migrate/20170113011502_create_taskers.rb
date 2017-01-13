class CreateTaskers < ActiveRecord::Migration[5.0]
  def change
    create_table :taskers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.text :description, null: false
      t.integer :rate, null: false
      t.boolean :auto_book, null: false, default: false

      t.string :skill, null: false

      t.string :location
      t.float :latitude
      t.float :longitude

      t.timestamps
    end

    add_index :taskers, :username, unique: true
  end
end
