require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "layout links" do
    get root_path
    assert_template 'flips/home'
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", login_path
    get signup_path
    assert_select "title", title("Sign up")

  end
end
