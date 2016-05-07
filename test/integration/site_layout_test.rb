require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "layout links" do
    get root_path
    assert_template 'flips/home'
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", signin_path
    assert_select "a[href=?]", signup_path
  end
end
