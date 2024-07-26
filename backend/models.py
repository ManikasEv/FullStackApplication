from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False,nullable=False)
    lastname_name = db.Column(db.String(80), unique=False,nullable=False)
    email = db.Column(db.String(120), unique=True,nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "firstname": self.first_name,
            "lastname":self.lastname_name,
            "email":self.email
        }
