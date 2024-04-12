"""empty message

Revision ID: f0791105d86a
Revises: 1f272465a252
Create Date: 2024-04-12 10:39:54.166152

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f0791105d86a'
down_revision = '1f272465a252'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('action', schema=None) as batch_op:
        batch_op.add_column(sa.Column('lab_id', sa.String(length=80), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('action', schema=None) as batch_op:
        batch_op.drop_column('lab_id')

    # ### end Alembic commands ###