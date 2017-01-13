class Taskers < ActiveRecord::Migration[5.0]
  def change
    drop_table :taskers

    create_table :taskers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :profile_img_link, null: false, default: "http://res.cloudinary.com/delisauce/image/upload/v1484337646/default-profile-img_c1ir5w.png"
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
