class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :tasker_id, null: false
      t.integer :user_id, null: false
      t.date :date, null: false
      t.text :description, null: false

      t.string :location
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
