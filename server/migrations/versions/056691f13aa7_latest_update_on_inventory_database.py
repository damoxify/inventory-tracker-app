"""latest update on inventory database

Revision ID: 056691f13aa7
Revises: 8deba43d27b9
Create Date: 2023-11-16 13:18:31.933314

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '056691f13aa7'
down_revision = '8deba43d27b9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('customers', sa.Column('address', sa.String(), nullable=True))
    op.add_column('customers', sa.Column('birthdate', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('customers', 'birthdate')
    op.drop_column('customers', 'address')
    # ### end Alembic commands ###